import { useState } from 'react';
import { Plus, Mail, Phone, MoreHorizontal, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { collaborators } from '@/data/mockData';
import { cn } from '@/lib/utils';

export default function TeamPage() {
  const [filter, setFilter] = useState<'all' | 'band' | 'crew'>('all');

  const bandMembers = collaborators.filter(c =>
    ['Lead Vocals / Guitar', 'Bass', 'Drums', 'Keyboards', 'Guitar'].some(role => c.role.includes(role.split(' ')[0]))
  );
  const crewMembers = collaborators.filter(c => !bandMembers.includes(c));

  const filteredCollaborators = filter === 'all'
    ? collaborators
    : filter === 'band'
      ? bandMembers
      : crewMembers;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Team</h2>
          <p className="text-muted-foreground">Manage band members and collaborators</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
          <UserPlus className="w-4 h-4 mr-2" />
          Add Member
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {(['all', 'band', 'crew'] as const).map((f) => (
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
            {f === 'all' ? 'All' : f === 'band' ? 'Band Members' : 'Crew & Staff'}
          </button>
        ))}
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCollaborators.map((person) => (
          <div
            key={person.id}
            className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-border"
                />
                <div>
                  <h3 className="font-semibold text-foreground">{person.name}</h3>
                  <p className="text-sm text-primary">{person.role}</p>
                </div>
              </div>
              <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <div className="space-y-2 pt-4 border-t border-border">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a href={`mailto:${person.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {person.email}
                </a>
              </div>
              {person.phone && (
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <a href={`tel:${person.phone}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {person.phone}
                  </a>
                </div>
              )}
            </div>

            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1 border-border">
                <Mail className="w-4 h-4 mr-2" />
                Message
              </Button>
              <Button variant="outline" size="sm" className="border-border">
                <Phone className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}

        {/* Add New Card */}
        <button className="rounded-xl border-2 border-dashed border-border bg-card/50 p-6 flex flex-col items-center justify-center gap-3 hover:border-primary/50 hover:bg-card transition-all duration-300 min-h-[240px]">
          <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
            <Plus className="w-6 h-6 text-muted-foreground" />
          </div>
          <span className="text-muted-foreground font-medium">Add Team Member</span>
        </button>
      </div>
    </div>
  );
}
