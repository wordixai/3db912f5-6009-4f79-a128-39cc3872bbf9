import { useState } from 'react';
import { Calendar, MapPin, Clock, Plus, MoreHorizontal, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { events } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { Event } from '@/types';

export default function EventsPage() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed'>('all');

  const filteredEvents = events.filter(event => {
    if (filter === 'all') return true;
    return event.status === filter;
  });

  const getStatusBadge = (status: Event['status']) => {
    switch (status) {
      case 'upcoming':
        return <span className="badge-primary text-xs px-2 py-1 rounded-full">Upcoming</span>;
      case 'completed':
        return <span className="badge-success text-xs px-2 py-1 rounded-full">Completed</span>;
      case 'cancelled':
        return <span className="badge-warning text-xs px-2 py-1 rounded-full">Cancelled</span>;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Events</h2>
          <p className="text-muted-foreground">Manage your upcoming and past events</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {(['all', 'upcoming', 'completed'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              filter === f
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredEvents.map((event) => {
          const soldPercentage = (event.ticketsSold / event.ticketsTotal) * 100;

          return (
            <div
              key={event.id}
              className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{event.name}</h3>
                  {getStatusBadge(event.status)}
                </div>
                <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                  <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{event.venue}, {event.city}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground font-medium">
                      {event.ticketsSold.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">
                      / {event.ticketsTotal.toLocaleString()} tickets
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="w-4 h-4 text-success" />
                    <span className="text-success font-medium">
                      ${event.revenue.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: `${soldPercentage}%` }} />
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-right">
                  {soldPercentage.toFixed(0)}% sold
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
