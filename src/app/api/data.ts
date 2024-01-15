export async function GET(params: number) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => {
      if (params > 1)
        resolve({ code: 200, data: [] })

      else
        reject(new Error('错误'))

      clearTimeout(t)
    }, 1000)
  })
}
