export async function GET(request: Request) {
  console.log('Home GET')

  const myBlob = new Blob()
  const init = { status: 200, statusText: 'SuperSmashingGreat GET!' }
  const myResponse = new Response(myBlob, init)
  return myResponse
}

export async function POST(request: Request) {
  console.log('Home POST')

  const myBlob = new Blob()
  const init = { status: 200, statusText: 'SuperSmashingGreat POST!' }
  const myResponse = new Response(myBlob, init)
  return myResponse
}
