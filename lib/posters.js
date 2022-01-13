export function getPosters() {
	const posters = [
		{
			title: {
				orange : "Run",
				blue: "the show"
			},
			slug: "run-the-show",
			image: "run-the-show.jpg",
			intro: "A unique partnership with ESPN allows Newhouse students to bring their work to a national audience on ACC Network Extra, gaining unmatched opportunities in sports broadcasting. Taking advantage of the school’s leading-edge broadcast facilities, students produce live pregame and halftime shows and work both in front of and behind the camera, in roles ranging from host to timeout coordinator to director to producer. No wonder Newhouse is known as the best place for aspiring sports broadcasters."
		},
		{
			title: {
				orange: "Take",
				blue: "charge"
			},
			slug: "take-charge",
			image: "take-charge.jpg",
			intro: "From student-run advertising and PR agencies to student-produced magazines and television shows, the opportunities abound for Newhouse students to take leadership roles in all areas of the communications field.There are more than 40 student media organizations on campus, including 17 magazines, a TV station, three radio stations and an award- winning student newspaper, plus a multimedia news site based at the Newhouse School."
		},
		{
			title: {
				orange: "Tell stories",
				blue: "that matter"
			},
			slug: "tell-stories-that-matter",
			image: "tell-stories-that-matter.jpg",
			intro: "Bringing diverse perspectives and unique voices, Newhouse students use their storytelling skills to make a powerful impact on the world around them. Whether reporting from local polling places on Election Day, investigating the national ramifications of new federal legislation or examining relationships between ethnic groups in the Middle East, our students amplify important voices and help bring about change."
		},
		{
			title: {
				orange: "Create and",
				blue: "innovate"
			},
			slug: "create-and-innovate",
			image: "create-and-innovate.jpg",
			intro: "A Newhouse education brings together the traditional with the cutting-edge. Training on the tools and technologies used in industry settings, students learn to be experts in their field.At the same time, they have opportunities to expand that expertise and immerse themselves in everything from drone journalism to data visualization to social media analytics to extended reality technology."
		},
		{
			title: {
				orange: "Set the",
				blue: "scene"
			},
			slug: "set-the-scene",
			image: "set-the-scene.jpg",
			intro: "Aspiring screenwriters, producers and directors see their visions come to life in Newhouse’s Dick Clark Studios, a high-tech entertainment production environment that rivals many industry settings.Students have produced a full-length, multi-camera sitcom pilot here, and launched a weekly live comedy show.Nearby film production company American High provides hands-on internship and job opportunities and allows students to have a Hollywood experience without ever leaving Syracuse."
		},
		{
			title: {
				orange: "Get",
				blue: "connected"
			},
			slug: "get-connected",
			image: "get-connected.jpg",
			intro: "You can’t visit a major media or entertainment organization without running into a Newhouse graduate. In fact, the Newhouse School name opens doors throughout the industry because of our highly accomplished alumni.And they’re highly loyal, too—they love Newhouse and they’re always willing to help current students and recent graduates.The Newhouse Career Development Center maintains an online database of some 6, 000 alumni who are available as a resource to Newhouse students for internship and job opportunities, career advice and mentorship."
		},
		{
			title: {
				orange: "Gain",
				blue: "insider access"
			},
			slug: "gain-insider-access",
			image: "gain-insider-access.jpg",
			intro: "Industry connections run deep at Newhouse, and they lead to an amazing array of opportunities for students.Annual benchmark trips to cities like New York, Washington and Los Angeles allow students to meet and speak with industry leaders and get a behind-the-scenes look at major media companies. Partnerships also lead to specialized internship and classroom experiences; for example, students have worked on documentaries for PBS Frontline and seen coursework published on Yahoo’s digital platforms."
		},
		{
			title: {
				orange: "Earn",
				blue: "VIP Status"
			},
			slug: "earn-vip-status",
			image: "earn-vip-status.jpg",
			intro: "Every year, our students win hundreds of awards in dozens of competitions spanning all areas of communications.Recent honors include a national Student ADDY Award and Gold Clio Awards for advertising, Hearst Awards for investigative and features reporting, College Photographer of the Year designations, acceptance to the Garden State Film Festival and a record-breaking showing at the Broadcast Education Association Festival of the Media Arts. "
		},
		{
			title: {
				orange: "Change your",
				blue: "vantage point"
			},
			slug: "change-your-vantage-point",
			image: "change-your-vantage-point.jpg",
			intro: "A Newhouse education isn’t limited to Syracuse. At any given time, our students can be found across the U.S.and around the globe gaining hands-on internship experience or participating in unique, school-organized reporting trips to places like Israel, South Africa and other international locations.Students also take advantage of Syracuse University’s robust study abroad program, spending semesters living and taking classes in cities like London or Madrid."
		},
		{
			title: {
				orange: "Go to the",
				blue: "center of it all"
			},
			slug: "go-to-the-center-of-it-all",
			image: "go-to-the-center-of-it-all.jpg",
			intro: "Newhouse students have the unique opportunity to spend a semester living, learning and working in the entertainment and media capitals of the world. Our satellite campus programs in Los Angeles and New York City extend the Newhouse education to both coasts, where students take classes taught by industry professionals, work at major communications organizations and build a network of contacts that will help them launch a successful career."
		},
	]
	return posters;
}

export function getPosterBySlug(slug, posters) {
	return posters.filter(poster => poster.slug === slug);
}
