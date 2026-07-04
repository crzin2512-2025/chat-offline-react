type Sender = 'user' | 'robot'

type Message = {
  id: string
  text: string
  sender: Sender
}

export type { Sender, Message }
