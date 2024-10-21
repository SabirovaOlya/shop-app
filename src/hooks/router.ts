import { useState, useMemo } from "react";
import { Router } from '@toolpad/core/AppProvider';


export function useRouter(initialPath: string): Router {
    const [pathname, setPathname] = useState<string>(initialPath);
  
    const router = useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path: string | URL) => setPathname(String(path)),
        };
    }, [pathname]);
  
    return router;
}
