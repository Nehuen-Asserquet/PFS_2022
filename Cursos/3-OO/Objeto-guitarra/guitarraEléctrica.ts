class guitarra {
    amplificadorEncendido : boolean = true;
    cable : boolean = true;
    volumen : number = 0;
    //canal :  = ();
    distorsion : number = 0;
    //afinacionEstandar : boolean = true;

    encenderApagarAmp() : void {
        if (this.amplificadorEncendido) {
            this.amplificadorEncendido = false;
        } else {
            this.amplificadorEncendido = true;
        }
    }
    
    conectarDesconectarCable() : void {
        if (this.cable) {
            this.cable = false;
        } else {
            this.cable = true;
        }
    }

    subirVolumen() : void { this.volumen +=1; }
    bajarVolumen() : void { this.volumen -=1; }
    //cambiar canal() : {}
    subirDistorsion() : void { this.distorsion +=1; }
    bajarDistorsion() : void { this.distorsion -=1; }
    verVolumen() : number { return this.volumen }
    //verCanal() : {}
    verDistorsion() : number { return this.distorsion }
}

