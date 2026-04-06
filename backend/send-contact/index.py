import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка сообщения с формы обратной связи на почту владельца сайта МамаГид"""

    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    email = body.get("email", "").strip()
    message = body.get("message", "").strip()

    if not name or not email or not message:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps({"error": "Заполните все поля"}, ensure_ascii=False),
        }

    smtp_password = os.environ.get("SMTP_PASSWORD", "")
    sender = "cofa0199@gmail.com"
    recipient = "cofa0199@gmail.com"

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #fdf6f0; border-radius: 12px;">
      <h2 style="color: #b05080; margin-bottom: 4px;">💌 Новое сообщение с МамаГид</h2>
      <p style="color: #999; font-size: 13px; margin-top: 0;">Кто-то написал через форму на сайте</p>
      <hr style="border: none; border-top: 1px solid #f0d8e0; margin: 20px 0;">
      <p style="margin: 8px 0;"><strong>Имя:</strong> {name}</p>
      <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:{email}" style="color: #b05080;">{email}</a></p>
      <p style="margin: 8px 0;"><strong>Сообщение:</strong></p>
      <div style="background: #fff; border-left: 3px solid #f4a0c0; padding: 12px 16px; border-radius: 6px; color: #444; line-height: 1.6;">
        {message}
      </div>
      <hr style="border: none; border-top: 1px solid #f0d8e0; margin: 20px 0;">
      <p style="color: #bbb; font-size: 12px; text-align: center;">МамаГид — поддержка для молодых мам</p>
    </div>
    """

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"МамаГид: сообщение от {name}"
    msg["From"] = sender
    msg["To"] = recipient
    msg.attach(MIMEText(html, "html", "utf-8"))

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(sender, smtp_password)
            server.sendmail(sender, recipient, msg.as_string())
    except Exception as e:
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({"error": "Не удалось отправить письмо", "detail": str(e)}),
        }

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"ok": True, "message": "Письмо отправлено!"}),
    }