// somehow the feature iteration has been reach 1.7.2
//
//

// fix for SRP-488
const { context: ctx } = useAtom()

if( ! ctx.user ) {
  throw new Error("User does not exists, redirexxxxx..")
}
