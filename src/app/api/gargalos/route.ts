import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
    // Handle escaped newlines in the private key if provided via Vercel / env
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

    if (!clientEmail || !privateKey || !spreadsheetId) {
      console.warn("Credenciais do Google Sheets não configuradas no .env.local");
      console.log("Formulário de Gargalos Submetido (Modo Local):", data);
      
      // We will still return 200 so the frontend doesn't break, but log the error
      return NextResponse.json(
        { message: "Formulário recebido com sucesso (Modo Local)!" },
        { status: 200 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const row = [
      new Date().toLocaleString("pt-BR"),
      data.name || "",
      data.email || "",
      data.phone || "",
      data.company || "",
      data.industry || "",
      data.teamSize || "",
      data.mainService || "",
      data.biggestBottleneck || "",
      data.currentSystem || "",
      data.attemptedSolutions || "",
      data.idealScenario || "",
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      // You may need to change 'Página1' or 'Sheet1' to match the actual sheet name
      range: "A1:L1", 
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [row],
      },
    });

    return NextResponse.json(
      { message: "Formulário salvo no Google Sheets com sucesso!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Erro no formulário de gargalos:", error);
    return NextResponse.json(
      { message: "Erro interno no servidor ao processar o formulário." },
      { status: 500 }
    );
  }
}
