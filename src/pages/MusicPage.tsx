import { useState } from 'react';
import { Play, Plus, Music, Clock, TrendingUp, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { tracks } from '@/data/mockData';
import { cn } from '@/lib/utils';

export default function MusicPage() {
  const [view, setView] = useState<'tracks' | 'albums'>('tracks');

  // Group tracks by album
  const albums = tracks.reduce((acc, track) => {
    if (!acc[track.album]) {
      acc[track.album] = {
        name: track.album,
        coverArt: track.coverArt,
        tracks: [],
        totalStreams: 0,
        totalRevenue: 0
      };
    }
    acc[track.album].tracks.push(track);
    acc[track.album].totalStreams += track.streams;
    acc[track.album].totalRevenue += track.revenue;
    return acc;
  }, {} as Record<string, { name: string; coverArt: string; tracks: typeof tracks; totalStreams: number; totalRevenue: number }>);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Music Catalog</h2>
          <p className="text-muted-foreground">Manage your tracks and albums</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" />
          Add Track
        </Button>
      </div>

      {/* View Toggle */}
      <div className="flex gap-2">
        {(['tracks', 'albums'] as const).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              view === v
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </button>
        ))}
      </div>

      {view === 'tracks' ? (
        /* Tracks List */
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-4 text-sm font-medium text-muted-foreground w-12">#</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Title</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground hidden md:table-cell">Album</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground hidden lg:table-cell">
                  <Clock className="w-4 h-4" />
                </th>
                <th className="text-right p-4 text-sm font-medium text-muted-foreground hidden sm:table-cell">Streams</th>
                <th className="text-right p-4 text-sm font-medium text-muted-foreground">Revenue</th>
                <th className="text-right p-4 text-sm font-medium text-muted-foreground w-12"></th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((track, index) => (
                <tr key={track.id} className="table-row-hover border-b border-border last:border-0 group">
                  <td className="p-4">
                    <div className="relative w-8 h-8 flex items-center justify-center">
                      <span className="text-sm text-muted-foreground group-hover:hidden">{index + 1}</span>
                      <button className="hidden group-hover:flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                        <Play className="w-4 h-4 fill-current" />
                      </button>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={track.coverArt}
                        alt={track.title}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium text-foreground">{track.title}</p>
                        <p className="text-sm text-muted-foreground md:hidden">{track.album}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 hidden md:table-cell">
                    <span className="text-muted-foreground">{track.album}</span>
                  </td>
                  <td className="p-4 hidden lg:table-cell">
                    <span className="text-muted-foreground">{track.duration}</span>
                  </td>
                  <td className="p-4 text-right hidden sm:table-cell">
                    <div className="flex items-center justify-end gap-2">
                      <TrendingUp className="w-4 h-4 text-success" />
                      <span className="text-foreground">{(track.streams / 1000000).toFixed(2)}M</span>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-success font-medium">${track.revenue.toLocaleString()}</span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                      <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        /* Albums Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(albums).map((album) => (
            <div
              key={album.name}
              className="rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="relative aspect-square">
                <img
                  src={album.coverArt}
                  alt={album.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">{album.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{album.tracks.length} tracks</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Music className="w-4 h-4" />
                    <span>{(album.totalStreams / 1000000).toFixed(1)}M streams</span>
                  </div>
                  <span className="text-success font-medium">${album.totalRevenue.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
