function oddishOrEvenish(number)
{
    if (number < 0)
    {
        number = Math.abs(number)
    }
    //alert(number)
    var remainder = 0;
    var sum = 0;
    while(number >= 10)
    {
        remainder = remainder + number%10;
        //alert(remainder);
        number = Math.floor(number / 10);
        //alert(number);
    }
    sum = number + remainder;
    alert(sum);
    if (sum%2 == 0)
    {
        alert("Even");
    }
    else
    {
        alert("Odd");
    }
}

oddishOrEvenish(43);
oddishOrEvenish(373);
oddishOrEvenish(4433);