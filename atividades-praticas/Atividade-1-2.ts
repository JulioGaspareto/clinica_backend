
class Funcionario {
    nome: string;
    salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    calcularSalario():number{
        return this.salario
    }
}




class Programador extends Funcionario {
    bonusProgramador: number

    // constructor(  bonusProgramador: number){}

  calcularSalario():number{
        return this.salario + (this.salario * this.bonusProgramador)
    }
}

class Designer extends Funcionario {
    bonusDesigner: number;

    constructor(nome: string, salario: number, bonusDesigner: number) {
        super(nome, salario);
        this.bonusDesigner = 0.2;
    }



calculoSalarioDesigner(funcionario: Funcionario) {
    const salarioCalculo = (funcionario.salario * this.bonusDesigner) + funcionario.salario
    return salarioCalculo
}


 
}

        const jonas = new Funcionario('jonas', 500)

console.log(jonas.nome , jonas.salario)