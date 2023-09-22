
const calculate = (exp) => {
    try {
        const e  = 
        String(exp)
        .replace('×', '*')
        .replace('−', '-')
        .replace('+', '+')
        .replace('÷', '/')
        .replace('%', '%')
        .replace('(', '(')
        .replace(')', ')')        
        //console.log("Evaluating ")
        const result = eval(e);
        if (String(result).includes('.')) {
          const beforeDot = String(result).split(".")[0];
          const afterDot = String(result).split(".").pop().substring(0, 2);
          return String(beforeDot + "." + afterDot);
          
        }
        return String(result);
      } catch (error) {
        console.log(error)
        return exp;
      }
}

export default calculate