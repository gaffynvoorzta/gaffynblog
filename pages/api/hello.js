export default function handler(req, res) {
    const msg = [ 'Well hello there.', 'Huh?', 'Eh?',
    'Almost an API', 'Kippers', 'Flanges', 'Spinach',
    'Dat sick blud!', 'Wha...Me?' ]
    const idx = Math.floor(Math.random() * msg.length)
    const randmsg = msg[idx]
    res.status(200).json({ text: randmsg })
  }