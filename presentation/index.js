// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
	whyPdf: require("../assets/why_pdf.jpg"),
	nodeServer: require("../assets/node_server.jpg"),
	awsEc2: require("../assets/awsEc2.jpg"),
	alotUser: require("../assets/alotUser.jpg"),
	npmSearchResult: require("../assets/npmSearchResult.png"),
	usePhantomjs: require("../assets/usePhantomjs.png"),
	ec2Reboot: require("../assets/ec2Reboot.jpg"),
	nodeHtmlPdf: require("../assets/node_html_pdf.png"),
	gitExample: require("../assets/gitExample.png")
};

preloader({images});

const theme = createTheme({
  primary: "#50C878"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
				<Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps>
              Generate PDF in Node Server
            </Heading>
						<Text textColor="black"> Donn Zhao</Text>
						<Text caps bold textColor="white"> backend team @ Channel 7</Text>

          </Slide>
					<Slide transition={["zoom"]} bgColor="primary">
							<Link href="https://github.com/Donnzh/node-pdfmake-demo">
								<Text caps textColor="white">example on Github</Text>
							</Link>
							<Image src={images.gitExample.replace("/", "")} margin="0px auto 40px" />

						</Slide>
          <Slide transition={["slide"]} bgColor="black" textColor="primary" notes="electronic receipts email, keep copy for finance department">
            <Image src={images.whyPdf.replace("/", "")} margin="0px auto 40px" height="293px"/>
						<List>
							<Appear><ListItem>electronic receipts email to customer</ListItem></Appear>
							<Appear><ListItem>own copy for financial department</ListItem></Appear>

						</List>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary" textColor="primary" notes="You can even put notes on your slide. How awesome is that?">
					<Text margin="-20px 0px 40px 0px" bold caps textColor="white">what we have</Text>
					<Appear><ListItem><Image src={images.awsEc2.replace("/", "")} margin="0px 0px 0px 0px" width ="350px" height="110px"/></ListItem></Appear>
					<Appear><ListItem><Image src={images.nodeServer.replace("/", "")} margin="0px 0px 0px 0px" width ="350px" height="110px"/></ListItem></Appear>
					<Appear><ListItem><Image src={images.alotUser.replace("/", "")} margin="0px 0px 0px 0px" width ="500px" height="220px"/></ListItem></Appear>
					<Appear><ListItem textColor="white"> Stable & Efficient </ListItem></Appear>

					</Slide>
					<Slide transition={["slide"]} bgColor="primary" textColor="white" notes="You can even put notes on your slide. How awesome is that?">
					<Text margin="0px auto 20px" bold caps textColor="white">HTML => PDF</Text>
					<Appear><Image src={images.npmSearchResult.replace("/", "")} margin="0px auto 20px" width ="450px" height="500px"/></Appear>

					</Slide>
					<Slide transition={["slide"]} bgColor="primary" textColor="white" notes="You can even put notes on your slide. How awesome is that?">
					<Text margin="0px auto 20px" bold caps textColor="white">library1: node-html-pdf</Text>

						<Appear><Image src={images.nodeHtmlPdf.replace("/", "")} margin="0px auto 20px" width ="550px" height="600px"/></Appear>

					</Slide>
					<Slide transition={["slide"]} bgColor="primary" textColor="white" notes="You can even put notes on your slide. How awesome is that?">
					<Text margin="0px auto 20px" bold caps textColor="white">library1: node-html-pdf</Text>

						<Markdown>
							{`
									   var fs = require('fs');
										var pdf = require('html-pdf');
										var html = fs.readFileSync('./test/businesscard.html', 'utf8');
										var options = { format: 'Letter' };

										pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
										  if (err) return console.log(err);
										  console.log(res); // { filename: '/app/businesscard.pdf' }
										});
							`}
						</Markdown>
						<Appear><Image src={images.usePhantomjs.replace("/", "")} margin="0px auto 20px" width ="550px" height="100px"/></Appear>
						<Appear><Text margin="0px auto 20px" bold caps textColor="white">Phantomjs ?</Text></Appear>

					</Slide>

					<Slide transition={["slide"]} bgColor="primary" textColor="white" notes="a web browser that exists only in script">
					<Text margin="0px auto 20px" bold textColor="white">Phantom JS</Text>
					<List>
						<Appear><ListItem>Headless web browser</ListItem></Appear>
						<Appear><ListItem>primary purpose:</ListItem></Appear>

						<Appear><ListItem>HEADLESS WEBSITE TESTING</ListItem></Appear>
						<Appear><ListItem>SCREEN CAPTURE</ListItem></Appear>
						<Appear><ListItem>PAGE AUTOMATION (manipulate DOM API )</ListItem></Appear>
						<Appear><ListItem>NETWORK MONITORING</ListItem></Appear>
						<Appear><ListItem textSize= "40" >"can do anything as a headless browser" </ListItem></Appear>

					</List>
					</Slide>
					<Slide transition={["slide"]} bgColor="primary" textColor="white" notes="a web browser that exists only in script">
					<Text margin="0px auto 20px" bold textColor="white">Phantom JS</Text>
					<List>
						<Appear><ListItem>By utilizing WebKit, it can render any content on a web page and save it as an image(JPEG/PNG) or PDF. </ListItem></Appear>
						<Appear><ListItem textColor="primary" ><Markdown textSize= "35">
						{`
						//call Web Page Module of Phantom JS
						var page = require('webpage').create();
						page.open('http://github.com/', function() {
						  page.render('github.pdf');
						  phantom.exit();
						});
						`}
						</Markdown></ListItem></Appear>

					</List>
					</Slide>
					<Slide transition={["slide"]} bgColor="primary" textColor="white" notes="You can even put notes on your slide. How awesome is that?">
					<Text margin="0px auto 20px" bold textColor="white">Phantom JS - Pros and Cons</Text>
					<List>
					<Appear><ListItem> turn html to pdf - template design is easy</ListItem></Appear>
					<Appear><ListItem> easy setup - only few lines of code </ListItem></Appear>
					<Appear><ListItem textSize= "40"> but... </ListItem></Appear>

						<Appear><ListItem> The binary file is about '30MB' which is a little heavy</ListItem></Appear>
						<Appear><ListItem> file generated size: 1000 pages ≈≈ 988 MB </ListItem></Appear>
						<Appear><ListItem> ≈1 MB per invoice </ListItem></Appear>

						<Appear><ListItem> Memory intensive </ListItem></Appear>
						<Appear><ListItem> CPU intensive </ListItem></Appear>

					</List>
					</Slide>
					<Slide transition={["zoom"]} bgImage={images.city.replace("/", "")} bgDarken={0.85}>

						<ListItem><Image src={images.alotUser.replace("/", "")} margin="0px 0px 0px 0px" width ="600px" height="500px"/></ListItem>

					</Slide>
          <Slide transition={["zoom"]} bgImage={images.city.replace("/", "")} bgDarken={0.85} notes="Olympic 2016, email server crashed sometimes every 2 hours" >

						<ListItem><Image src={images.ec2Reboot.replace("/", "")} margin="0px 0px 0px 0px" width ="500px" height="400px"/></ListItem>

          </Slide>

          <Slide transition={["slide"]} bgColor="primary" textColor="white" >
					<Text margin="0px auto 20px" bold textColor="white"> JS library </Text>

					<Layout>
            <Fill>
              <Text setSize='40'  textColor="secondary" bgColor="white" margin={10}>
                  pdfkit
                </Text>
								<Appear><ListItem> PDF generation for Node and the browser </ListItem></Appear>
								<Appear><ListItem> HTML5 canvas-like API</ListItem></Appear>
								<Appear><ListItem>  API is similar to graphics programming </ListItem></Appear>
								<Appear><ListItem>  generating documents with functions calls </ListItem></Appear>
								<Appear><ListItem> 	written in CoffeeScript</ListItem></Appear>

              </Fill>

              <Fill>

								<Text setSize='40'  textColor="secondary" bgColor="white" margin={10}>
                  pdfmake
                </Text>
								<Appear><ListItem> wrapper around pdfkit </ListItem></Appear>
								<Appear><ListItem> higher level of API </ListItem></Appear>
								<Appear><ListItem> multi-level (nested) structures,  e.g. tables and columns </ListItem></Appear>
								<Appear><ListItem> better documentation </ListItem></Appear>

							</Fill>
            </Layout>
          </Slide>
					{/*	<Slide transition={["slide"]} bgColor="primary" textColor="white" notes="highlight that it is the design to output write stream, no necessary to disk">
				<Text margin="0px auto 20px" bold textColor="white">pdfmake</Text>*/}
					<CodeSlide
										transition={['fade']}
										lang="js"
										textSize="20px"
										code={require("raw!../assets/codeExample")}
										ranges={[
											{ loc: [0, 4], title: "pdfmake", note: "call the modules" },
											{ loc: [4, 10], title: "pdfmake", note: "Defined the pdf context" },
											{ loc: [11, 12] },

											{ loc: [12, 13], note: "It can output to write stream, no necessary to disk" },
											{ loc: [13, 14], note: "finish the output" }]}
					/>
					{/*<List>
						<Appear><ListItem textColor="primary" ><Markdown textSize= "35">
						{`
							var PdfPrinter = require('pdfmake');
							var printer = new PdfPrinter(fonts);
							var fs = require('fs');

							var docDefinition = {
								content: [
									'First paragraph',
									'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
								]
							};

							var pdfDoc = printer.createPdfKitDocument(docDefinition);
							pdfDoc.pipe(fs.createWriteStream('pdfs/basics.pdf'));
							pdfDoc.end();
						`}
						</Markdown></ListItem></Appear>
						<Appear><ListItem> Document-definition-object </ListItem></Appear>
					</List>
					</Slide>*/}

					<Slide transition={["slide"]} bgColor="primary" textColor="white" notes="when doing playground, shows it pure JS so, it very fast, 2 brower rendering possible">
					<Text margin="0px auto 20px" bold textColor="white">docDefinition</Text>
				<Markdown textSize= "35">
						{`
							var docDefinition = {
							  content: [
							    { text: 'This is a header', style: 'header' },
							    'No styling here, this is a standard paragraph',
							    { text: 'Another text', style: 'anotherStyle' },
							    { text: 'Multiple styles applied', fontSize: 15, bold: true }
							  ],

							  styles: {
							    header: {
							      fontSize: 22,
							      bold: true
							    },
							    anotherStyle: {
							      italics: true,
							      alignment: 'right'
							    }
							  }
							};
						`}
						</Markdown>
					<Appear><ListItem><Link target="_blank" href="http://pdfmake.org/playground.html">check with pdfmake playground</Link></ListItem></Appear>

					</Slide>

					<Slide transition={["slide"]} bgColor="primary" textColor="white" notes="You can even put notes on your slide. How awesome is that?">
					<Text margin="0px auto 20px" bold textColor="white">pdfmake - Pros and Cons</Text>
					<List>
					<Appear><ListItem caps >Memory Efficient </ListItem></Appear>
					<Appear><ListItem caps >Cpu Efficient </ListItem></Appear>
					<Appear><ListItem caps>PDF size ≈ 50 kb per page, 5% of generated by PhantomJs </ListItem></Appear>

					<Appear><ListItem caps>easy setup </ListItem></Appear>
					<Appear><ListItem caps>customize font </ListItem></Appear>
					<Appear><ListItem >con: </ListItem></Appear>

						<Appear><ListItem>have to learn a custom templating definition syntax </ListItem></Appear>

					</List>
					</Slide>

          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote caps>Thanks</Quote>
            </BlockQuote>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
