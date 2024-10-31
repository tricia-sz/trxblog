import { notFound } from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import { intl } from '@/config/intl';
 
export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
 
  if (!intl.locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`../langs/${locale}.json`)).default
  };
});