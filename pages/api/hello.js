export default function handler(req, res) {
    const msg = [ 'Well hello there.', 
    'The package should be arriving tomorrow. It must be intercepted!', 
    'Rumours abound of some treasure buried down the well...',
    'Random Encounter: A gang of brigands block your path...', 
    'Twas brillig and the slithy toves...', 
    'Argue for your limitations and they shall be yours!', 
    'Format Hard Drive: Do you wish to proceed?',
    'You rolled a 6. The orcs do not see you and you pass safely...', 
    '1235 Galactic Credits have been removed from your account...', 
    'Thank you for shopping with us',
    'Please click ok to continue',
    'Tell you what, chuck in some apples as well and call it a Fiver!',
    'Whaddya mean the package was empty!!!',
    'Please present your retina for scanning...',
    'The meeting will take place as normal. Make sure you aint followed...' ]
    const idx = Math.floor(Math.random() * msg.length)
    const randmsg = msg[idx]
    res.status(200).json({ text: randmsg })
  }