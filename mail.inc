new RequestsClient:client;
forward SendEmail(const to[], const subject[], const message[]);

public SendEmail(const to[], const subject[], const message[])
{
    client = RequestsClient("http://localhost:8080/");
    
    new target[100], subjection[100], msg[100];
    format(msg, 100, "%s", message);
    format(subjection, 100, "%s", subject);
    format(target, sizeof target, "%s", to);

    RequestJSON(
        client,
        "mail",
        HTTP_METHOD_POST,
        "OnMailResponse",
        JsonObject(
            "to", JsonString(target),
            "subject", JsonString(subjection),
            "message", JsonString(msg)
        ),
        .headers = RequestHeaders("Content-Type", "application/json")
    );
}

public: OnMailResponse(Request:id, E_HTTP_STATUS:status, Node:node) {
    if (status == HTTP_STATUS_OK) {
        printf("Email sent successfully!");
    } else {
        printf("Failed to send email, status: %d", _:status);
    }
}
