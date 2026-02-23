export const useSiteContent = () => {
  const supabase = useSupabaseClient();

  const {
    data: rawContent,
    pending,
    error,
  } = useAsyncData("site-content", async () => {
    const { data, error } = await supabase
      .from("site_content")
      .select("key, value");

    if (error) throw error;

    // Transform array of {key, value} into a key-value object
    const contentMap: Record<string, any> = {};
    if (data) {
      data.forEach((item: any) => {
        contentMap[item.key] = item.value;
      });
    }
    return contentMap;
  });

  // Helper to ensure we have fallback content while loading or if missing
  const getContent = (key: string, fallback: any) => {
    if (!rawContent.value) return fallback;
    return rawContent.value[key] !== undefined
      ? rawContent.value[key]
      : fallback;
  };

  return {
    content: rawContent,
    pending,
    error,
    getContent,
  };
};
