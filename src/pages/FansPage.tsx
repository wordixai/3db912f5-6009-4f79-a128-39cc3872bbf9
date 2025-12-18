import { useState } from 'react';
import { Search, Filter, Plus, Mail, MapPin, Tag, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { fans } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { Fan } from '@/types';

const segmentColors: Record<Fan['segment'], string> = {
  superfan: 'badge-primary',
  active: 'badge-success',
  casual: 'badge-warning',
  new: 'badge-muted'
};

const segmentLabels: Record<Fan['segment'], string> = {
  superfan: 'Superfan',
  active: 'Active',
  casual: 'Casual',
  new: 'New'
};

export default function FansPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSegment, setSelectedSegment] = useState<Fan['segment'] | 'all'>('all');

  const filteredFans = fans.filter(fan => {
    const matchesSearch = fan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         fan.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSegment = selectedSegment === 'all' || fan.segment === selectedSegment;
    return matchesSearch && matchesSegment;
  });

  const segmentCounts = {
    all: fans.length,
    superfan: fans.filter(f => f.segment === 'superfan').length,
    active: fans.filter(f => f.segment === 'active').length,
    casual: fans.filter(f => f.segment === 'casual').length,
    new: fans.filter(f => f.segment === 'new').length
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Fans</h2>
          <p className="text-muted-foreground">Manage and segment your fan base</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" />
          Add Fan
        </Button>
      </div>

      {/* Segment Pills */}
      <div className="flex flex-wrap gap-2">
        {(['all', 'superfan', 'active', 'casual', 'new'] as const).map((segment) => (
          <button
            key={segment}
            onClick={() => setSelectedSegment(segment)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              selectedSegment === segment
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            {segment === 'all' ? 'All Fans' : segmentLabels[segment]}
            <span className="ml-2 opacity-70">({segmentCounts[segment]})</span>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="flex gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search fans..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-muted border-border"
          />
        </div>
        <Button variant="outline" className="border-border">
          <Filter className="w-4 h-4 mr-2" />
          Filters
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Fans Table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Fan</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground hidden md:table-cell">Segment</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground hidden lg:table-cell">Location</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground hidden sm:table-cell">Total Spent</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground hidden lg:table-cell">Events</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground hidden xl:table-cell">Tags</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredFans.map((fan) => (
              <tr key={fan.id} className="table-row-hover border-b border-border last:border-0">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={fan.avatar}
                      alt={fan.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-foreground">{fan.name}</p>
                      <p className="text-sm text-muted-foreground">{fan.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <span className={cn("text-xs px-2 py-1 rounded-full", segmentColors[fan.segment])}>
                    {segmentLabels[fan.segment]}
                  </span>
                </td>
                <td className="p-4 hidden lg:table-cell">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {fan.location}
                  </div>
                </td>
                <td className="p-4 hidden sm:table-cell">
                  <span className="font-medium text-foreground">${fan.totalSpent.toLocaleString()}</span>
                </td>
                <td className="p-4 hidden lg:table-cell">
                  <span className="text-muted-foreground">{fan.eventsAttended}</span>
                </td>
                <td className="p-4 hidden xl:table-cell">
                  <div className="flex flex-wrap gap-1">
                    {fan.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                    {fan.tags.length > 2 && (
                      <span className="text-xs text-muted-foreground">+{fan.tags.length - 2}</span>
                    )}
                  </div>
                </td>
                <td className="p-4">
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    <Mail className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
