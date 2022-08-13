// @ts-nocheck
import { Timeline, Event } from 'react-timeline-scribble';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

function TimelineComponent() {
	return (
		<OverPack playScale={0.1}>
			<QueueAnim key='queue' delay={100} type={'left'} duration={2000}>
				<div key={'a'}>
					<Timeline>
						<Event
							interval={'2018 – 2021'}
							title={'Dataingeniør'}
							subtitle={'Bachelor - NTNU - Trondheim'}></Event>
						<Event
							interval={'2021 – 2023'}
							title={'Datateknologi'}
							subtitle={'Master - NTNU - Trondheim'}>
							<strong>Spesialisering - Algoritmer og datamaskiner:</strong>
							<br></br> Metoder og teknikker som kan anvendes til å utvikle
							systemer som krever høy ytelse.
						</Event>
					</Timeline>
				</div>
			</QueueAnim>
		</OverPack>
	);
}
export default TimelineComponent;
