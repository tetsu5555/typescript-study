function wait(duration: number) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`${duration}ms passed`))
    })
}
// このコードだとwaitの型は
// resがstringであることを特定出来ず
// function wait(duration: number): Promise<{}>となる
wait(1000).then(res => {})


function wait2(duration: number): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve(`${duration}ms passed`))
    })
}
