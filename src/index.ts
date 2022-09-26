// todo, implement channels memory with limit (string bytes are length * 2)

const consoleStr = (channel: string | symbol, objs: any[]) =>
  `<<<<${channel.toString()}>>>>\n${objs.join("\n")}`
const get = function(target: {}, channel: string | symbol) {
  return {
    log: (...objs) => console.log(consoleStr(channel, objs)),
    warn: (...objs) => console.warn(consoleStr(channel, objs)),
    info: (...objs) => console.info(consoleStr(channel, objs)),
    error: (...objs) => console.error(consoleStr(channel, objs))
  }
}

const tonsil: Record<string | number | symbol, ReturnType<typeof get>> =
  new Proxy({},{get})