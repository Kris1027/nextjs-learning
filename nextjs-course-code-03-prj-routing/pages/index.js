import { getFeaturedEvents } from "../Dummy data";
import EventList from "../components/events/event-list";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <main>
      <EventList items={featuredEvents} />
    </main>
  );
}
