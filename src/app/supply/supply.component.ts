import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css']
})
export class SupplyComponent implements OnInit {
  parentTitle:string;
  parentBodyObj:any = {};
  constructor() { 
    this.parentTitle = "Supply chain transformation on the cloud";
  }

  ngOnInit() {
    /*this.parentDesc = '<p>Throughout the pandemic, all eyes have been on the supply chain. Supply chain leaders have been challenged to figure out how to quickly, cost-effectively, and responsibly meet ever-changing demand while ensuring their supply chains are as flexible as possible. If COVID-19 has taught us one thing, it’s that we can’t simply optimize for what the new normal is. There is no new normal. If a supply chain is to survive, it has to be resilient forever, so it can continuously evolve to respond effectively to whatever’s thrown at it.</p>'+
    + '<br>'
    + '<p>This is why the cloud has become critical to every supply chain. The cloud provides technologies that allow companies to process huge amounts of data—from virtually unlimited sources across the entire supply chain—at speeds and volumes never before possible. It enables companies to deeply analyze that data to generate critical business insights that can vastly improve decision making. And it allows companies to reconfigure how they work to gain the agility to deal with the consequences of whatever the data says. The cloud provides vast amounts of computing power, with a simple, flexible and affordable data and digital architecture, that opens up myriad possibilities for the supply chain—and enables leaders to manage service levels and cost, build in resilience and ensure responsible operations.</p>';*/

    this.parentBodyObj = {
      body: [
        {
          heading: '',
          details: 'Throughout the pandemic, all eyes have been on the supply chain. Supply chain leaders have been challenged to figure out how to quickly, cost-effectively, and responsibly meet ever-changing demand while ensuring their supply chains are as flexible as possible. If COVID-19 has taught us one thing, it’s that we can’t simply optimize for what the new normal is. There is no new normal. If a supply chain is to survive, it has to be resilient forever, so it can continuously evolve to respond effectively to whatever’s thrown at it. This is why the cloud has become critical to every supply chain. The cloud provides technologies that allow companies to process huge amounts of data—from virtually unlimited sources across the entire supply chain—at speeds and volumes never before possible. It enables companies to deeply analyze that data to generate critical business insights that can vastly improve decision making. And it allows companies to reconfigure how they work to gain the agility to deal with the consequences of whatever the data says. The cloud provides vast amounts of computing power, with a simple, flexible and affordable data and digital architecture, that opens up myriad possibilities for the supply chain—and enables leaders to manage service levels and cost, build in resilience and ensure responsible operations.'
        },
        {
          heading: 'What’s the true value of the cloud?',
          details: 'When thinking about the value the cloud provides, many people still mainly think cost savings. And it’s true that the cloud does save companies money. By running applications in a public cloud, a company benefits from the economies of scale of thousands of customers while abandoning a highly customized solution and the costly maintenance it entails in favor of agile, best-in-class prebuilt components, managed by a service provider. But cost savings are just the beginning. The cloud drives speed, agility, scale and visibility. Companies using the cloud gain the flexibility to quickly adjust the amount of computing resources as needed, up or down; the ability to reduce the time (and cost) to develop and deploy new applications; the integration with a whole new world of players; and the visibility across operations and the entire value chain for faster, more-informed decision-making. The cloud also is a huge enabler of innovation. With the major cloud providers investing billions of dollars in new features every year, the cloud provides the foundation for affordable, unrestricted access to cutting-edge technologies and capabilities that would ordinarily be out of a company’s reach. Finally, the cloud plays a key role in responsibility and sustainability—especially when it comes to the supply chain. The cloud and efficient data computing help accelerate companies’ adoption of emerging technologies to reduce the supply chain’s environmental footprint and improve resource efficiency while increasing regulatory compliance and improving risk mitigation.'
        },
        {
          heading: 'Where’s the opportunity today and tomorrow for the supply chain?',
          details: 'By fully embracing the cloud, supply chain executives will be able to influence all dimensions of the supply chain—engineering (product), planning, procurement, manufacturing, fulfillment and service—to create a supply chain that is:'
        },
        {
          heading: '',
          details: 'Attaining these goals may require a much more ambitious push to the cloud across the supply chain. All supply chain functions will have to embrace the cloud to tackle short-term and long-term challenges, including developing remote access to a wealth of data, cross-collaborating and collecting data in real time to quickly and appropriately improve customer experiences and reacting to unforeseen disruptions. The cloud has already made significant inroads in the procurement function, and this will continue. Planning and fulfillment, both currently with medium cloud penetration, also have high potential for future adoption. While cloud adoption in R&D and engineering is low today, there’s a big opportunity to expedite new product introduction through cloud-based product lifecycle management solutions. Manufacturing is slowly moving execution systems to the cloud and that will continue as the cloud is more accepted.'
        }
      ],
      authors: [
        {
          name: 'KRIS TIMMERMANS',
          position: 'Senior Managing Director – Strategy & Consulting, Supply Chain & Operations Global Lead',
          linkedIn: 'https://be.linkedin.com/in/kris-timmermans-209800',
          tw: 'https://twitter.com/KrisTimmer'
        },
        {
          name: 'DAVID SIMCHI-LEVI',
          position: 'Professor of Engineering Systems at MIT and Head of the MIT Data Science Lab',
          linkedIn: '',
          tw: ''
        },
        {
          name: 'TRACEY COUNTRYMAN',
          position: 'Senior Managing Director – Industry X, Digital Manufacturing & Operations, Global Lead',
          linkedIn: 'https://www.linkedin.com/in/tracey-countryman-2488a64/',
          tw: 'https://twitter.com/tcountryman'
        },
        {
          name: 'FRANCOIS X. BOURBIGOT',
          position: 'Managing Director – Strategy & Consulting, Supply Chain & Operations',
          linkedIn: 'https://www.linkedin.com/in/francois-xavier-bourbigot-3080191/',
          tw: ''
        },
        {
          name: 'JORDI PARIS',
          position: 'Managing Director – Strategy & Consulting, Supply Chain & Operations, Technology Strategy & Advisory',
          linkedIn: 'https://www.linkedin.com/in/jordi-paris-a787941/',
          tw: ''
        },
        {
          name: 'KRISTINE RENKER',
          position: 'Managing Director – Strategy & Consulting, Supply Chain & Operations, Global',
          linkedIn: 'https://www.linkedin.com/in/kristine-renker-9764a92/',
          tw: ''
        }
      ],
      contributors: [
        {
          name: 'CRAIG GOTTLIEB',
          position: 'Managing Director – Strategy & Consulting, Aerospace & Defense, North America',
          linkedIn: 'https://www.linkedin.com/in/accentureaerospacecraiggottlieb/',
          tw: 'https://twitter.com/craiggottcc'
        },
        {
          name: 'OLIVIER PROULX',
          position: 'Senior Consultant – Strategy & Consulting, Supply Chain & Operations',
          linkedIn: 'https://www.linkedin.com/in/olivier-proulx-44b210a4/',
          tw: ''
        },
        {
          name: 'STEVE PURICELLI',
          position: 'Managing Director – Strategy & Consulting, Supply Chain & Operations',
          linkedIn: 'https://www.linkedin.com/in/steve-puricelli-07ab11/',
          tw: ''
        }
      ],
      opportunities: [
        {
          title: 'Interconnected',
          body: 'across the ecosystem',
          img: 'interconnected.png'
        },
        {
          title: 'Intelligent',
          body: 'through digitization, analytics and automation for traceability, agility and resiliency',
          img: 'intelligent.png'
        },
        {
          title: 'Innovative',
          body: 'to replace a one-size-fits-all strategy with a tailored supply chain strategy',
          img: 'innovative.png'
        }
      ]
    }
  }

}
