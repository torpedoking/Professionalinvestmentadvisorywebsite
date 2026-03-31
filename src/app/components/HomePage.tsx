import { Hero } from './Hero';
import { About } from './About';
import { VisionMission } from './VisionMission';
import { NameMeaning } from './NameMeaning';
import { OperatingPhilosophy } from './OperatingPhilosophy';
import { ExecutionFramework } from './ExecutionFramework';
import { Services } from './Services';
import { EngagementModels } from './EngagementModels';
import { CoreValues } from './CoreValues';
import { Contact } from './Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <VisionMission />
      <NameMeaning />
      <OperatingPhilosophy />
      <ExecutionFramework />
      <Services />
      <EngagementModels />
      <CoreValues />
      <Contact />
    </>
  );
}
