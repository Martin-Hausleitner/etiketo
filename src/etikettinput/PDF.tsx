import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default class PDF extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <>
        <div>
          <PDFViewer>
            <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <Text>Section #1</Text>
                </View>
                <View style={styles.section}>
                  <Text>Section #2</Text>
                </View>
              </Page>
            </Document>
          </PDFViewer>
          <p>Page</p>
        </div>
      </>
    );
  }
}
