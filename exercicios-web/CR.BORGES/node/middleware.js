//middleware pattern ou chain of responsability
const passo1 =(ctx,next)=>{
    ctx.valor1= 'mid 01'
    next()
}
const passo2 =(ctx,next)=>{
    ctx.valor2= 'mid 02'
    next()
}
const passo3 =(ctx,next)=>{
    ctx.valor3= 'mid 03'
    next()
}


const exec = (ctx, ...middlewares)=>{
    const execPasso = indice=>{
        if(middlewares && indice <middlewares.length ){
            middlewares[indice](ctx,()=>execPasso(indice+1))
        }
    }
    execPasso(0) 
}

const ctx={}
exec(ctx,passo1,passo3)
console.log(ctx)