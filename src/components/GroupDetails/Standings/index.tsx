import { useState } from "react";
import { Container, Table, TableHeader, TableCell, TableCellText, TableBody, TableRow } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface StandingProps {
  standings: [];
}

export function Standings({ standings }: StandingProps) {

  function getPosition(position: number) {
    if(position === 1) return <MaterialCommunityIcons name="podium-gold" size={24} color="#f5d860" />
    if(position === 2) return <MaterialCommunityIcons name="podium-silver" size={24} color="#e3e3e3" />
    if(position === 3) return <MaterialCommunityIcons name="podium-bronze" size={24} color="#b9856e" />
    return <TableCellText style={{color: '#053b36'}}>{position}</TableCellText>;
  }



  const Header = () => (
    <TableHeader>
      <TableCell style={{width: '15%'}}>
        <TableCellText style={{color: '#FFF', fontSize: 14}}>#</TableCellText>
      </TableCell>
      <TableCell style={{width: '50%'}}>
        <TableCellText style={{color: '#FFF', fontSize: 14}}>Player</TableCellText>
      </TableCell>
      <TableCell style={{width: '20%'}}>
        <TableCellText style={{color: '#FFF', fontSize: 14}}>Games</TableCellText>
      </TableCell>
      <TableCell style={{width: '15%'}}>
        <TableCellText style={{color: '#FFF', fontSize: 14}}>Avg</TableCellText>
      </TableCell>
    </TableHeader>
  )

  const Row = ({ position, name, games, avg} : {position: number, name: string;games: number;avg: number;}) => (
    <TableRow
      style={{
        borderBottomWidth: position == standings.length ? 0:2,
      }}
    >
      <TableCell style={{width: '15%', borderRightWidth: 2, borderRightColor: '#0d9488'}}>
        {getPosition(position)}
      </TableCell>
      <TableCell style={{width: '50%', borderRightWidth: 2, borderRightColor: '#0d9488'}}>
        <TableCellText style={{color: '#053b36', fontSize: 14}}>{name}</TableCellText>
      </TableCell>
      <TableCell style={{width: '20%', borderRightWidth: 2, borderRightColor: '#0d9488'}}>
        <TableCellText style={{color: '#053b36', fontSize: 14}}>{games}</TableCellText>
      </TableCell>
      <TableCell style={{width: '15%'}}>
        <TableCellText style={{color: '#053b36', fontSize: 14}}>{avg}</TableCellText>
      </TableCell>
    </TableRow>
  );

  return (
    <Container>
      <Table>
        <Header />
        <TableBody>
          {standings.map((standing, index) => (
            <Row
              position={standing.position}
              name={standing.player}
              games={standing.games}
              avg={standing.avg}
              key={index}
            />
          ))}

        </TableBody>

      </Table>

    </Container>
  )
}
