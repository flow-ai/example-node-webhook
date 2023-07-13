const express = require('express'),
      bodyParser = require('body-parser'),
      { Message, Card, Text, Media, Button } = require('flowai-js-templates'),
      port = process.env.PORT || 6091

const app = express()
app.use(bodyParser.json())
app.post('/', (req, res) => {
  console.info('Received body', req.body)
      
  const {
    replyUrl,
    verifyToken,
    user
  } = req.body

  // Text bubble
  const text = new Text('You know what?')

  // Button for the card
  const button = new Button({
    label: 'Show me cat pics',
    value: 'https://www.google.nl/search?q=kittens+are+awesome',
    type: 'url'
  })

  // Card widget
  const card = new Card({
    title: 'Kittens are awesome!',
    subtitle: 'Jumping, dancing',
    media: new Media({
      url: 'http://static.fjcdn.com/pictures/Kittens_10cff6_2206231.jpg',
      type: 'image'
    })
  })
  card.addButton(button)

  // Message with fallback message
  const message = new Message('You know what? Kittens are awesome!')
  message.addResponse(text)
  message.addResponse(card)

  // Return the verifytoken and
  // array of messages
  const replyBody = {
    verifyToken,
    messages: [message]
    // events: [{
    //   name: 'EVENT NAME'
    // }]
  }

  // Direct reply
  res.json(replyBody)
})

app.listen(port, () => {
  console.info('Webhook listening at %s', port)
})
