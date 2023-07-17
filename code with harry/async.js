

console.log('person1:show ticket')
console.log('person2:show ticket')


/*const promisewifebringingtickets=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')
    },3000)
})

const getpopcorn=promisewifebringingtickets.then((t)=>{
console.log('wife-i have the tickets')
console.log('husband-should we go in')
console.log('wife- i am hungry')
return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
})

const getbutter=getpopcorn.then((t)=>{
    console.log('wife-i need butter')
    console.log('husband-chatori khi ki')
    console.log('wife- bilkul tumhari tarah')
    return new Promise((resolve,reject)=>resolve(`${t} butter`))
    })

    getbutter.then((t)=> console.log(t))
    */

    const premovie=async()=>{
        const promisewifebringingtickets=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('ticket')
            },3000)
        })
        const getpopcorn=new Promise((resolve,reject)=>resolve(`popcorn`))
        const addbutter=new Promise((resolve,reject)=>resolve(`butter`))
        const getcoldrinks=new Promise((resolve,reject)=>resolve(`coldrinks`))
        
        let ticket=await promisewifebringingtickets
        console.log(`wife-i have the ${ticket}`)
        console.log('husband-should we go in')
        console.log('wife- i am hungry')

        let popcorn=await getpopcorn
        console.log(`husband:i got some ${popcorn}`)
        console.log('wife-i need butter')
       console.log('husband-chatori khi ki')
       console.log('wife- bilkul tumhari tarah')

       let butter=await addbutter
       console.log(`husband:i got some ${butter}`)

       let coldrinks= await getcoldrinks
       console.log(`husband:i got some ${coldrinks}`)

       return ticket
    }

    premovie().then((m)=> console.log(`person3 :shows ${m}`))
    
console.log('person4:show ticket')
console.log('person5:show ticket')
