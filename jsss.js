var Fcalc;
var Currents = 0;
var FlagNewNum = false;
var PendingOp = "";

function Init()
{
	Fcalc = document.calc;
}

function NumPressed(Num) {
    
    if (FlagNewNum) {
        Fcalc.ReadOut.value = Num;
        FlagNewNum = false;
    } else {
        if (Fcalc.ReadOut.value == "0")
            Fcalc.ReadOut.value = Num;
        else
            Fcalc.ReadOut.value += Num;
    }
}

function Operation(Op) {
    var Readout = Fcalc.ReadOut.value;
    if (FlagNewNum && PendingOp != "=") {
        Fcalc.ReadOut.value = Currents;
    } else {
        FlagNewNum = true;
        if ('+' == PendingOp)
            Currents += parseFloat(Readout);
        else if ('-' == PendingOp)
            Currents -= parseFloat(Readout);
        else if ('/' == PendingOp)
            Currents /= parseFloat(Readout);
        else if ('*' == PendingOp)
            Currents *= parseFloat(Readout);
        else
            Currents = parseFloat(Readout);
        Fcalc.ReadOut.value = Currents;
        PendingOp = Op;
    }
}

function Decimal() {
    var curReadOut = Fcalc.ReadOut.value;
    if (FlagNewNum) {
        curReadOut = "0.";
        FlagNewNum = false;
    } else {
        if (curReadOut.indexOf(".") == -1)
            curReadOut += ".";
    }
    Fcalc.ReadOut.value = curReadOut;
}

function ClearEntry() {
    Fcalc.ReadOut.value = "0";
    FlagNewNum = true;
}

function Clear() {
    Currents = 0;
    PendingOp = "";
    ClearEntry();

}

function Del() {
	Fcalc.ReadOut.value = Fcalc.ReadOut.value.substring(0, Fcalc.ReadOut.value.length - 1);
	if (Fcalc.ReadOut.value == '') Fcalc.ReadOut.value = '0';
}

function Neg() {
    Fcalc.ReadOut.value =
        parseFloat(Fcalc.ReadOut.value) * -1;
}

function Percent() {
    Fcalc.ReadOut.value =
        (parseFloat(Fcalc.ReadOut.value) / 100) *
        parseFloat(Currents);
}

function SqrtBtn() {
	Fcalc.ReadOut.value = Math.sqrt(parseFloat(Fcalc.ReadOut.value));
}

function SqrBtn() {
	Fcalc.ReadOut.value = parseFloat(Fcalc.ReadOut.value)*parseFloat(Fcalc.ReadOut.value);
}

function Reverse() {
	Fcalc.ReadOut.value = 1 / parseFloat(Fcalc.ReadOut.value);
}

function KeyEvent() {
    switch (event.key) {
        case '1':
            NumPressed(1);
            break;
        case '2':
            NumPressed(2);
            break;
        case '3':
            NumPressed(3);
            break;
        case '4':
            NumPressed(4);
            break;
        case '5':
            NumPressed(5);
            break;
        case '6':
            NumPressed(6);
            break;
        case '7':
            NumPressed(7);
            break;
        case '8':
            NumPressed(8);
            break;
        case '8':
            NumPressed(8);
            break;
        case '9':
            NumPressed(9);
            break;
        case '0':
            NumPressed(0);
            break;
        case '+':
            Operation('+');
            break;
        case '/':
            Operation('/');
            break;
        case '-':
            Operation('-');
            break;
        case '*':
            Operation('*');
            break;
        case '=':
            Operation('=');
            break;
        case '.':
            Decimal();
            break;
        case '%':
            Percent();
            break;
        case 'Enter':
            Operation('=');
            break;
        case 'Backspace':
            Del();
            break;
    }
}
