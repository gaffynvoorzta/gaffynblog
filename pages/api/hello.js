export default function handler(req, res) {
    const msg = [ 'Well hello there.', 'Huh?', 'Eh?',
    'Almost an API', 'Kippers', 'Flanges', 'Spinach',
    'Dat sick blud!', 'Wha...Me?', 'Thank you for shopping with us',
    'Please click ok to continue',
    'Tell you what, chuck in some apples as well and call it a Fiver!',
    'Dinners Ready!!!',
    'Have you tidied your bedroom?',
    'The meeting will take place as normal. Make sure you aint followed...' ]
    const idx = Math.floor(Math.random() * msg.length)
    const randmsg = msg[idx]
    res.status(200).json({ text: randmsg })
  }