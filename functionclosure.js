function creategame()
{
    let score=0;
    function Increase(points)
    {
        score=score+points;

    }
    function Decrease(points)
    {
        score=score-points;

    }
    function Display()
    {
        console.log(`tottal points ${score}pts`);
    }

    return {Increase,Decrease,Display}


}

const game=creategame();

game.Increase(5);
game.Decrease(2);
game.Display();
