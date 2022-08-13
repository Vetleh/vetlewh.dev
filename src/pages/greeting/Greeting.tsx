import { TypeAnimation } from 'react-type-animation';
import './Greeting.css';
import QueueAnim from 'rc-queue-anim';
import More from './more/More';
import Socials from './socials/Socials';

function Greeting() {
	return (
		<div className='wrapper'>
			<div className='greeting'>
				<div className='links'>
					<QueueAnim delay={500} duration={1000}>
						<h1 key={'a'} style={{ fontSize: '3em' }}>
							Vetle Harnes
						</h1>
						<h3 key={'b'} className='sub-header'>
							<TypeAnimation
								sequence={[
									1500,
									'I am a student',
									2000,
									'I am a developer',
									2000,
									'I am a learner',
									2000,
									'I am a problem solver',
								]}
								speed={40}
								wrapper='div'
								cursor={true}
								repeat={Infinity}
								style={{ fontSize: '1.3em' }}
							/>
						</h3>
					</QueueAnim>
				</div>
			</div>
			<Socials></Socials>
			<More></More>
		</div>
	);
}

export default Greeting;
