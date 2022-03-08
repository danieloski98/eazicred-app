import { View, Text, ScrollView, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { AgentAtom } from '../../states/agent'
import theme from '../../utils/theme';
import { queryClient } from '../../../App';
import { currencyFormatterNGN } from '../../utils/currencyConverter';

export default function Paydayloanshistory() {
  const [agent, setAgent] = useRecoilState(AgentAtom);
  const [loading, setLoading] = useState(false);

  const text = (status: number) => {
    switch(status) {
      case 1: {
        return 'PROCESSING';
      }
      case 2: {
        return 'APPROVED';
      }
      case 3: {
        return 'DECLINED';
      }
    }
  }

  const Color = (status: number) => {
    switch(status) {
      case 1: {
        return 'orange';
      }
      case 2: {
        return 'green';
      }
      case 3: {
        return 'red';
      }
    }
  }

  const refresh = () => {
    setLoading(true);
    queryClient.invalidateQueries();
    const timer = setTimeout(() => {
      setLoading(false);
      clearTimeout(timer);
    }, 3000);
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView 
      refreshControl={<RefreshControl refreshing={loading} onRefresh={refresh} />}
      contentContainerStyle={{ padding: 20 }}>

       {agent.paydayloans.length < 1 && (
          <View style={{ width: '100%', height: 250, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
            <Text>You haven't created any Payday loans yet!</Text>  
          </View>
       )}

       {agent.paydayloans.length > 0 && !loading && agent.paydayloans.map((item, index) => (
          <View key={index.toString()} style={{ width: '100%', height: 150, backgroundColor: 'whitesmoke', flexDirection: 'row', marginBottom: 20, borderRadius: 5 }}>

            <View style={{ flex: 0.7, paddingHorizontal: 20, justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, fontFamily: theme.fonts.RobotoRegular }}>{item.email}</Text>
                <Text style={{ fontSize: 18, fontFamily: theme.fonts.RobotoRegular, marginTop: 10 }}>NGN {currencyFormatterNGN(item.loan_amount)}</Text>

                <Text style={{ fontFamily: theme.fonts.RobotoLight, fontSize: 14, marginTop: 10 }}>{new Date(item.created_at).toDateString()}</Text>
            </View>

            <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
                <View style={{ width: '100%', height: 40, borderRadius: 5, borderWidth: 2, borderColor: Color(item.status), justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{ fontFamily: theme.fonts.PoppinsSemiBold, fontWeight: '500', color: Color(item.status) }}>
                    {text(item.status)}  
                  </Text>
                </View>
            </View>

          </View>
       ))}

      </ScrollView>
    </View>
  )
}