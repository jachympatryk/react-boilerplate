import { ServerErrorType } from 'server/server.types';
import { UseShowContentReturnType } from './use-show-content.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useShowContent<T extends { data: any; loading: boolean; error: ServerErrorType | null }>(
  { data, loading, error }: T,
  permission?: boolean,
): UseShowContentReturnType {
  function checkPayloadData() {
    if (data?.data) {
      return Boolean(data?.data.length) || Boolean(data?.data);
    }

    if (Array.isArray(data)) {
      return Boolean(data?.length);
    }

    return Boolean(data);
  }

  const hasPayload = checkPayloadData();
  const hasPermission = permission !== false;

  const showLoader = loading;
  const showContent = !error && !loading && hasPermission && hasPayload;
  const showNoContent = Boolean(!loading && !error && data && !hasPayload && hasPermission);
  const showError = Boolean(!loading && error && !hasPayload && hasPermission);
  const showPagination = hasPayload && !showError && !showNoContent && hasPermission;
  const showPermissionError = !hasPermission;

  return {
    showContent,
    showNoContent,
    showError,
    showLoader,
    showPagination,
    showPermissionError,
  };
}
