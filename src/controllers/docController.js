
export async function startDoc(req, res) {
    res.send(`
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>API Documentation</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                    margin: 0;
                    padding: 20px;
                }
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    color: #0056b3;
                }
                .text-center { 
                    text-align: center;
                }
                code {
                    background-color: #eee;
                    padding: 2px 4px;
                    border-radius: 4px;
                    font-size: 1.1em;
                }
                .endpoint {
                    margin-bottom: 20px;
                }
                .endpoint h2 {
                    margin-bottom: 10px;
                }
                .endpoint p {
                    margin: 5px 0;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1 class="text-center">API | ☁️  CloudNest</h1>
                <div class="endpoint">
                    <h2>POST /api/files</h2>
                    <p>Создает новый файл.</p>
                    <p><strong>Пример запроса:</strong> <code>POST /api/files</code></p>
                    <p><strong>Параметры:</strong></p>
                    <ul>
                        <li><code>file</code> (File): Загружаемый файл</li>
                    </ul>
                    <p><strong>Ответ:</strong></p>
                    <pre>
{
    "id": "cm0gxjhqr0001nnt2mov8up93",
    "name": "info.txt",
    "type": "text/plain",
}
                    </pre>
                </div>
            </div>
        </body>
    `
    )
}