import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://yyqjcfzddjozcwahhugs.supabase.co';
const SUPABASE_API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5cWpjZnpkZGpvemN3YWhodWdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyNDE0MDMsImV4cCI6MjAxMTgxNzQwM30.ecvd0WDbKHG2InfkVpWAJg8feBhIo8gNSqJ7_mfiloo';

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

supabase.storage.config = {
  url: 'https://supabase.com/dashboard/project/yyqjcfzddjozcwahhugs/storage/buckets/simbiosis',
};

export default supabase;
