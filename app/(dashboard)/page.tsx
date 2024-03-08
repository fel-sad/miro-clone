'use client';
import { EmptyOrg } from './_components/empty-org';
import { useOrganization } from '@clerk/nextjs';
import { BoardList } from './_components/board-list';
import { useSearchParams } from 'next/navigation';

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  const { organization } = useOrganization();
  const nextSearchParams = useSearchParams();
  const search = nextSearchParams.get('search');
  const favorites = nextSearchParams.get('favorites');
  const query = { search: `${search}`, favorites: `${favorites}` };

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={query} />
      )}
    </div>
  );
};

export default DashboardPage;
