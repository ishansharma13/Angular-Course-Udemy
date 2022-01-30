export class CounterService{
    private acToInac: number = 0;
    private inacToAc: number = 0;

    incrementAcToInAc(){
        this.acToInac++;
        console.log("Changing from Active to Inactive", this.acToInac);
    }
    incrementInacToAc(){
        this.inacToAc++;
        console.log("Changing from Inactive to Active", this.inacToAc);
    }
}