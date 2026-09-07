import { t } from '@/lib/i18n';
import type { Locale } from '@/lib/types';

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = t(locale);
  return (
    <footer className="site-footer">
      <div><strong>AI <i>×</i> Bio</strong><p>{copy.footer}</p></div>
      <p className="copyright">© 2026 AI × Bio</p>
    </footer>
  );
}
