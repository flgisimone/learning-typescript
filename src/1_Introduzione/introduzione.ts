
  const input1 = document.getElementById("num1")! as HTMLInputElement
  const input2 = document.getElementById("num2")! as HTMLInputElement
  const res = document.getElementById("res")! as HTMLTimeElement
  const button = document.querySelector("button")

  function add(num1: number, num2: number){
    return num1 + num2
  }

  button?.addEventListener("click", () =>{
    let res = add(Number(input1.value), Number(input2.value))
    
    console.log(res)
  })

