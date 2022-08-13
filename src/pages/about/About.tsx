import './About.css';
import IntrestCard from '../../components/about/intrests/IntrestCard';
import { intrests } from '../../data/intrests';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

function About() {
	return (
		<div className='about'>
			<OverPack playScale={0.1}>
				<QueueAnim
					key='queue'
					delay={100}
					className='queue-simple intrests'
					type={'left'}
					duration={2000}>
					{intrests.map((int) => (
						<div key={int.name}>
							<IntrestCard intrest={int}></IntrestCard>
						</div>
					))}
				</QueueAnim>
			</OverPack>
		</div>
	);
}
export default About;
