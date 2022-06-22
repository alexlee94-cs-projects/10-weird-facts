export default function Main(props) {
	return (
		<main className={props.darkMode ? "dark" : ""}>
			<h1 className="main--title"> 10 Facts That Will Blow Your Mind</h1>
			<ul className="main--facts">
				<h2 className="main--facts--header">Weird But True</h2>
				<br />
				<li>Sunsets on Mars are blue.</li>
				<li>Spider webs were used as bandages in ancient times.</li>
				<li>A cloud can weigh more than a million pounds.</li>
				<li>Ice pops were invented by an 11-year-old by accident.</li>
				<li>
					Even though Froot Loops are different colors, they all have exactly
					the same flavor.
				</li>
				<li>In the Philippines, McDonald’s serves spaghetti.</li>
				<li>A duel between three people is actually called a truel.</li>
				<li>In Morse Code -.- means k.</li>
				<li>Most toilet paper sold for home use in France is pink.</li>
				<li>
					Surgeons who play video games at least 3 hours a week perform 27%
					faster and make 37% fewer errors.
				</li>
			</ul>
		</main>
	);
}
