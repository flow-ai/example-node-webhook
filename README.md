# Flow.ai Node.js Webhook Example

[Webhooks](https://docs.flow.ai/overview/code/webhook.html) are an integration method of Flow.ai based on a *we call you* principle.

![](/assets/header.png)

## Getting started

### 1. Install [Node.js](https://nodejs.org)

### 2. Clone this repo and install packages

```bash
git clone https://github.com/flow-ai/example-node-webhook.git
cd flowai-example-node-webhook
npm install
```

### 3. Run the webhook server

```bash
npm start
```

The server will run on http://localhost:3009 and print incoming webhooks.

### 4. Deploy online or fire up a ngrok tunnel

**Deploy to heroku**

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

**Run a local [ngrok](https://ngrok.com/) tunnel**

```bash
ngrok http -subdomain=inconshreveable 80
```

This tells `ngrok` to tunnel all requests to `https://inconshreveable.ngrok.com` to your `localhost:3009`.

### 5. Configure your webhook

To get started, go the the [Flow.ai dashboard](https://app.flow.ai/integrations) and create a new webhook integration.

Enter the url of your webhook endpoint and press save.

### 6. Receive calls

Next, configure a flow with the [design app](https://app.flow.ai/design) that triggers an action. For the action select the webhook you just created.

That's really all it takes to start responding to webhook calls.

## Further reading
Please view our [webhook documentation](https://docs.flow.ai/overview/code/webhook.html) for more info about the messages you receive and how to send messages back.
