const GameAlt = () => {
    const [p, pointsout] = useState(0);
    const [newc, replacement] = useState();
    const [cheevo, makenew] = useState();
    const mall = [];
    const displaycheevs = [];

    const adddescription = (cheevodesc, pts, cheevoid) => {

        return (
            <div className="desccopy">
                {cheevodesc}
            </div>
        )
    }

    function fourcheevs() {
        for (let c = 0; c < 4; c++) {
            const ch = mall[Math.round(Math.random() * mall.length)];
            for (let i of displaycheevs) {
                if (ch.title === i.title) {
                    c--;
                    console.log('title is same');
                    fourcheevs();
                }
            }
            displaycheevs.push(ch);
        }
    };

    (function mallcheevos() {
        const allcheevs = cheevos.achievements;
        for (let d in allcheevs) {
            const e = allcheevs[d];
            mall.push({ 'title': e.title, 'description': e.description, 'points': e.points, 'image': e.vid });
        }
        fourcheevs();
    }());

    const outdivs = displaycheevs.map(
        (item, index) => (
            <div id={index} className="cheevoitem" onClick={() => makenew(adddescription(item.description, item.points, index))} key={index}>
                {item.title}
            </div>
        )
    )

    console.log(displaycheevs);

    const newcheevo = (id) => {

        const olditem = document.getElementById(id);
        const desc = document.getElementById('description');

        $(olditem)
            .animate({
                "left": "110%",
            }, 150)
            .delay(250, function () {
                $(olditem).remove();
                $(desc).hide();
            });

        displaycheevs.slice(id);
        const newitem = mall[Math.round(Math.random() * mall.length)];
        displaycheevs.push(newitem);
    }

    const incpts = () => {

        p++;

        return (
            <div className="points">{p}</div>
        )
    }

    const Timer = () => {

        return (
            <div id="timer">

            </div>
        )
    }

    const Points = () => {

        return (
            <div className="points">{p}</div>
        )
    }

    const Button = () => {

        return (
            <button onClick={() => replacement(newcheevo(cheevoid))} className="cheevoitem-pointsbtn">
                Found it! ({pts} points)
            </button>
        )
    }

    const OptionDivs = (props) => {

        $('#description').hide().fadeIn(200);

        return (
            <div id="cheevoparent" className="cheevoparent" key="cheevoparent">
                {outdivs}
                {newc}
                {cheevo}
            </div>
        )
    }

    return (
        <div>
            <Timer /><Points/>
            <OptionDivs increase={incpts} />
            <div id="description">
                <Button/>
            </div>
        </div>
    )
};

export default GameAlt;