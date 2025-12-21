import {
  Calendar,
  Users,
  Music,
  DollarSign,
  TrendingUp,
  Headphones,
  Ticket } from
'lucide-react';
import StatCard from '@/components/StatCard';
import { events, fans, tracks, revenueData } from '@/data/mockData';
import { cn } from '@/lib/utils';

export default function DashboardPage() {
  const upcomingEvents = events.filter((e) => e.status === 'upcoming');
  const totalRevenue = revenueData.reduce((sum, r) => sum + r.streaming + r.merchandise + r.tickets, 0);
  const totalStreams = tracks.reduce((sum, t) => sum + t.streams, 0);

  return (
    <div className="p-6 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Fans"
          value={fans.length.toLocaleString() + 'K'}
          change="+12%"
          changeType="positive"
          icon={Users} />

        <StatCard
          title="Total Streams"
          value={(totalStreams / 1000000).toFixed(1) + 'M'}
          change="+8.5%"
          changeType="positive"
          icon={Headphones} />

        <StatCard
          title="Revenue (YTD)"
          value={'$' + (totalRevenue / 1000).toFixed(0) + 'K'}
          change="+23%"
          changeType="positive"
          icon={DollarSign} />

        <StatCard
          title="Upcoming Events"
          value={upcomingEvents.length}
          change={upcomingEvents.length + ' shows'}
          changeType="neutral"
          icon={Calendar} />

      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className='text-foreground text-lg font-semibold'>Revenverview</h2>
            <select className="bg-muted border border-border rounded-lg px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20">
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
          </div>

          {/* Simple Chart */}
          <div className="h-64 flex items-end justify-between gap-2">
            {revenueData.map((data, index) => {
              const total = data.streaming + data.merchandise + data.tickets;
              const maxValue = 250000;
              const height = total / maxValue * 100;

              return (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex flex-col gap-1" style={{ height: '200px' }}>
                    <div className="w-full flex-1 flex flex-col justify-end gap-0.5">
                      <div
                        className="w-full rounded-t-sm bg-primary/80"
                        style={{ height: `${data.tickets / maxValue * 200}px` }} />

                      <div
                        className="w-full bg-success/80"
                        style={{ height: `${data.merchandise / maxValue * 200}px` }} />

                      <div
                        className="w-full rounded-b-sm bg-warning/80"
                        style={{ height: `${data.streaming / maxValue * 200}px` }} />

                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{data.month}</span>
                </div>);

            })}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-primary/80" />
              <span className="text-sm text-muted-foreground">Tickets</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-success/80" />
              <span className="text-sm text-muted-foreground">Merchandise</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-warning/80" />
              <span className="text-sm text-muted-foreground">Streaming</span>
            </div>
          </div>
        </div>

        {/* Top Tracks */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">Top Tracks</h2>
            <Music className="w-5 h-5 text-muted-foreground" />
          </div>

          <div className="space-y-4">
            {tracks.slice(0, 5).map((track, index) =>
            <div key={track.id} className="flex items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground w-5">
                  {index + 1}
                </span>
                <img
                src={track.coverArt}
                alt={track.title}
                className="w-10 h-10 rounded-lg object-cover" />

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{track.title}</p>
                  <p className="text-xs text-muted-foreground">{(track.streams / 1000000).toFixed(1)}M streams</p>
                </div>
                <TrendingUp className="w-4 h-4 text-success" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-foreground">Upcoming Events</h2>
          <button className="text-sm text-primary hover:text-primary/80 transition-colors">
            View all
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {upcomingEvents.map((event) => {
            const soldPercentage = event.ticketsSold / event.ticketsTotal * 100;
            return (
              <div
                key={event.id}
                className="p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/30 transition-colors">

                <div className="flex items-center gap-2 mb-3">
                  <Ticket className="w-4 h-4 text-primary" />
                  <span className={cn(
                    "text-xs font-medium px-2 py-0.5 rounded-full",
                    soldPercentage >= 90 ? "badge-warning" : "badge-success"
                  )}>
                    {soldPercentage >= 90 ? 'Almost Sold Out' : 'On Sale'}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{event.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{event.venue}, {event.city}</p>
                <p className="text-sm text-muted-foreground mb-3">
                  {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • {event.time}
                </p>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: `${soldPercentage}%` }} />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {event.ticketsSold.toLocaleString()} / {event.ticketsTotal.toLocaleString()} tickets
                </p>
              </div>);

          })}
        </div>
      </div>
    </div>);

}