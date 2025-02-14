"use client"

import React, { useEffect, useState } from "react"
import "../globals.css"
import { createClient } from "@/utils/supabase/client"

const Test: React.FC = () => {
  const [data, setData] = useState(null);
  const supabase = createClient();

  const fetchData = async () => {
    const { data, error } = await supabase.from('test').select();
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      setData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInsert = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    const { error } = await supabase.from('test').insert([
      {
        created_at: new Date(),
        first_name: 'boomo boom',
        user_id: user?.id,
      },
    ]);
    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully');
      fetchData(); // Refresh data after insertion
    }
  };

  return (
    <div className="test">
      test
      <button onClick={handleInsert}>Button</button>
      <div>
        {data && data.map((item: any) => (
          <div key={item.id}>{item.first_name}</div>
        ))}
      </div>
    </div>
  );
}

export default Test;
