
        class Calculator {
            constructor() {
                this.n1 = document.getElementById("num1");
                this.n2 = document.getElementById("num2");
                this.res = document.getElementById("result");
                this.initializeEventListeners();
            }

            initializeEventListeners() {
                document.getElementById("add").addEventListener("click", () => {
                    this.add();
                });

                document.getElementById("sub").addEventListener("click", () => {
                    this.subtract();
                });

                document.getElementById("mult").addEventListener("click", () => {
                    this.multiply();
                });

                document.getElementById("div").addEventListener("click", () => {
                    this.divide();
                });
            }

            add() {
                this.res.value = parseInt(this.n1.value) + parseInt(this.n2.value);
            }

            subtract() {
                this.res.value = parseInt(this.n1.value) - parseInt(this.n2.value);
            }

            multiply() {
                this.res.value = parseInt(this.n1.value) * parseInt(this.n2.value);
            }

            divide() {
                const num2Value = parseInt(this.n2.value);
                if (num2Value === 0) {
                    this.res.value = "Cannot divide by zero";
                } else {
                    this.res.value = parseInt(this.n1.value) / num2Value;
                }
            }
        }

        const calculator = new Calculator();
   
